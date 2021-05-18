# Install docker dependecies
USER='fpc'
EMAIL='francisco.pc7063@gmail.com'
sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release

# Install docker
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo adduser $USER docker

# Install docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose





# Install tutor APT dependecies
sudo apt -y install python3 python3-pip libyaml-dev curl

# Install tutor
sudo curl -L "https://github.com/overhangio/tutor/releases/download/v11.2.8/tutor-$(uname -s)_$(uname -m)" -o /usr/local/bin/tutor
sudo chmod 0755 /usr/local/bin/tutor


# Deploy edx
tutor local quickstart
tutor local importdemocourse


# Create login user
tutor local createuser $USER $EMAIL

# View config on tutor
#cat "$(tutor config printroot)/config.yml"`
#vim "$(tutor config printroot)/config.yml"`

# Demo course
#tutor local importdemocourse

# Restart
# tutor local start
# tutor local stop
