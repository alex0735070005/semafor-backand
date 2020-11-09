TYPE="$1"
BASE_DIR=$(pwd)
CLEAR_SCRIPT=src/docker/clear.all.sh

export $(grep -v '^#' .env | xargs)

if [ "$TYPE" = "prod" ]; then
    echo 'LEVEL PRODUCTION IS NOT WORKED'
elif [ "$TYPE" = "dev" ]; then
    echo 'BUILDING AND RUNNITNG CONTAINERS'
    docker-compose up -d --build
    docker-compose exec node ssh -fN -L $MSSQL_SERVER_IP:$MSSQL_SERVER_PORT:$MSSQL_SSH_REMOTE_IP:$MSSQL_SSH_REMOTE_PORT $MSSQL_SSH_REMOTE_PROVIDER_USER@$MSSQL_SSH_REMOTE_PROVIDER_IP
    docker-compose exec node bash
elif [ "$TYPE" = "clear" ]; then
    sh $CLEAR_SCRIPT
else
    echo 'ENTER COMMAND sh start.sh prod | dev | clear'
fi
