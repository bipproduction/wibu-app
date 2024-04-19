import os from 'os'
const setting = {
    server_path: ""
}

const platform = os.platform()

if (platform === "darwin") {
    setting.server_path = "/etc/nginx/sites-enabled"
}


export default setting