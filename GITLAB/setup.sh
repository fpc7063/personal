#!/bin/bash

###Gitlab database settings
###! Docs https://docs.gitlab.com/omnibus/settings/database.html
##! **Only needed if you use and external database.**
gitlab_rails['db_adapter'] = "postgresql"
gitlab_rails['db_encoding'] = "UTF8"
# gitlab_rails['db_collation'] = nil
gitlab_rails['db_database'] = "gitlabhq_production"
# gitlab_rails['db_pool'] = 1
gitlab_rails['db_username'] = "gitlab"
gitlab_rails['db_password'] = ""
gitlab_rails['db_host'] = "localhost"
gitlab_rails['db_port'] = 5432
# gitlab_rails['db_socket'] = nil
# gitlab_rails['db_sslmode'] = nil
# gitlab_rails['db_sslcompression'] = 0
# gitlab_rails['db_sslrootcert'] = nil
# gitlab_rails['db_sslcert'] = nil
# gitlab_rails['db_sslkey'] = nil
# gitlab_rails['db_prepared_statements'] = false
# gitlab_rails['db_statements_limit'] = 1000
