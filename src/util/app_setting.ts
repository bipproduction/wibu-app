import os from 'os'
const platform = os.platform()
const appASetting = {
    server_path: "",
    url: "",
    platform
}

if (platform === "darwin") {
    appASetting.server_path = "/etc/nginx/sites-enabled"
    appASetting.url = "http://localhost:3000"
} else {
    appASetting.server_path = "/etc/nginx/sites-enabled"
    appASetting.url = "https://wibu-app.wibudev.com"
}

export default appASetting