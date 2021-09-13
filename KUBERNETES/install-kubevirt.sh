#!/bin/bash

MINIKUBE_DRIVER=kvm2
MINIKUBE_MEMORY=4092
# Pick an upstream version of KubeVirt to install
export RELEASE=v0.45.0


if [[ $1 == minikube ]]; then
	minikube config set driver $MINIKUBE_DRIVER
else
	echo " $1 is not supported"
	exit 1
fi

minikube status &> /dev/null
MINIKUBE_STATUS=$(echo "$?")
if [[ $MINIKUBE_STATUS == 85 ]]; then
	minikube start --driver=kvm2 --memory $MINIKUBE_MEMORY
elif [[ $MINIKUBE_STATUS == 0 ]]; then
	echo "There is an existent minikube profile. Please delete it and proceed with installation"
	exit 2
else
	echo "Unexpected minikube status process output"
	echo "MINIKUBE_STATUS: $MINIKUBE_STATUS"
	minikube status
fi

# KUBECTL INSTALLATION
CURRENT_DIR=$(pwd)
sudo bash -c "$CURRENT_DIR/install-kubectl.sh"
if [[ $? != 0 ]]; then
	echo "Kubectl installation failed. Gracefully exiting..."
	exit 3
fi

# Deploy the KubeVirt operator
kubectl apply -f https://github.com/kubevirt/kubevirt/releases/download/${RELEASE}/kubevirt-operator.yaml
# Create the KubeVirt CR (instance deployment request) which triggers the actual installation
kubectl apply -f https://github.com/kubevirt/kubevirt/releases/download/${RELEASE}/kubevirt-cr.yaml
# wait until all KubeVirt components are up
kubectl wait --timeout=180s --for=condition=Available -n kubevirt kv/kubevirt


kubectl krew version &> /dev/null
KREW_EXISTS=$(echo "$?")
if [[ $KREW_EXISTS == 0 ]]; then
	echo "Krew found."
else
	echo -e "Krew not found, installing it..."
	
	set -x; cd "$(mktemp -d)" &&
	OS="$(uname | tr '[:upper:]' '[:lower:]')" &&
	ARCH="$(uname -m | sed -e 's/x86_64/amd64/' -e 's/\(arm\)\(64\)\?.*/\1\2/' -e 's/aarch64$/arm64/')" &&
	curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/krew.tar.gz" &&
	tar zxvf krew.tar.gz &&
	KREW=./krew-"${OS}_${ARCH}" &&
	"$KREW" install krew

	echo -e "\n# Krew" | tee -a $HOME/.bashrc
	echo "export PATH=\"\${KREW_ROOT:-\$HOME/.krew}/bin:\$PATH\"" | tee -a $HOME/.bashrc

	source $HOME/.bashrc
fi

kubectl virt &> /dev/null
VIRTCL_EXISTS=$(echo "$?")
if [[ $VIRTCTL_EXISTS != 0 ]]; then
	kubectl krew install virt
elif [[ $VIRTCTL_EXISTS == 0 ]]; then
	echo "Virtctl found."
fi
