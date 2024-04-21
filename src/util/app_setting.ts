import os from 'os'
const platform = os.platform()
const appASetting = {
    server_path: "",
    url: "",
    platform,
    isLocal: platform === "darwin",
}

if (platform === "darwin") {

    appASetting.url = "http://localhost:3000"
} else {

    appASetting.url = "https://wibu-app.wibudev.com"
}

export default appASetting