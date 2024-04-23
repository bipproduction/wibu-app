export interface MODEL_PM2 {
    pid: number
    name: string
    pm2_env: Pm2Env
    pm_id: number
    monit: Monit
}

export interface Pm2Env {
    kill_retry_time: number
    windowsHide: boolean
    username: string
    treekill: boolean
    automation: boolean
    pmx: boolean
    instance_var: string
    watch: boolean
    autorestart: boolean
    vizion: boolean
    merge_logs: boolean
    env: Env
    args: string[]
    namespace: string
    filter_env: any[]
    name: string
    node_args: any[]
    pm_exec_path: string
    pm_cwd: string
    exec_interpreter: string
    exec_mode: string
    pm_out_log_path: string
    pm_err_log_path: string
    pm_pid_path: string
    km_link: boolean
    vizion_running: boolean
    NODE_APP_INSTANCE: number
    NVM_INC: string
    MANPATH: string
    TERM_PROGRAM: string
    rvm_bin_path: string
    ANDROID_HOME: string
    PYENV_ROOT: string
    NVM_CD_FLAGS: string
    GEM_HOME: string
    SHELL: string
    TERM: string
    TMPDIR: string
    IRBRC: string
    HOMEBREW_REPOSITORY: string
    TERM_PROGRAM_VERSION: string
    ORIGINAL_XDG_CURRENT_DESKTOP: string
    MallocNanoZone: string
    TERM_SESSION_ID: string
    MY_RUBY_HOME: string
    NVM_DIR: string
    USER: string
    COMMAND_MODE: string
    rvm_path: string
    SSH_AUTH_SOCK: string
    __CF_USER_TEXT_ENCODING: string
    rvm_prefix: string
    PATH: string
    __CFBundleIdentifier: string
    PWD: string
    EDITOR: string
    LANG: string
    VSCODE_GIT_ASKPASS_EXTRA_ARGS: string
    XPC_FLAGS: string
    XPC_SERVICE_NAME: string
    rvm_version: string
    HOME: string
    SHLVL: string
    PYENV_SHELL: string
    VSCODE_GIT_ASKPASS_MAIN: string
    HOMEBREW_PREFIX: string
    LOGNAME: string
    VSCODE_GIT_IPC_HANDLE: string
    LC_CTYPE: string
    GEM_PATH: string
    NVM_BIN: string
    VSCODE_GIT_ASKPASS_NODE: string
    GIT_ASKPASS: string
    HOMEBREW_CELLAR: string
    INFOPATH: string
    RUBY_VERSION: string
    COLORTERM: string
    _: string
    PM2_USAGE: string
    PM2_HOME: string
    unique_id: string
    status: string
    pm_uptime: number
    axm_actions: any[]
    axm_monitor: AxmMonitor
    axm_options: AxmOptions
    axm_dynamic: AxmDynamic
    created_at: number
    restart_time: number
    unstable_restarts: number
    version: string
    versioning: any
    pm_id: number
    exit_code: number
}

export interface Env {
    NVM_INC: string
    MANPATH: string
    TERM_PROGRAM: string
    rvm_bin_path: string
    ANDROID_HOME: string
    PYENV_ROOT: string
    NVM_CD_FLAGS: string
    GEM_HOME: string
    SHELL: string
    TERM: string
    TMPDIR: string
    IRBRC: string
    HOMEBREW_REPOSITORY: string
    TERM_PROGRAM_VERSION: string
    ORIGINAL_XDG_CURRENT_DESKTOP: string
    MallocNanoZone: string
    TERM_SESSION_ID: string
    MY_RUBY_HOME: string
    NVM_DIR: string
    USER: string
    COMMAND_MODE: string
    rvm_path: string
    SSH_AUTH_SOCK: string
    __CF_USER_TEXT_ENCODING: string
    rvm_prefix: string
    PATH: string
    __CFBundleIdentifier: string
    PWD: string
    EDITOR: string
    LANG: string
    VSCODE_GIT_ASKPASS_EXTRA_ARGS: string
    XPC_FLAGS: string
    XPC_SERVICE_NAME: string
    rvm_version: string
    HOME: string
    SHLVL: string
    PYENV_SHELL: string
    VSCODE_GIT_ASKPASS_MAIN: string
    HOMEBREW_PREFIX: string
    LOGNAME: string
    VSCODE_GIT_IPC_HANDLE: string
    LC_CTYPE: string
    GEM_PATH: string
    NVM_BIN: string
    VSCODE_GIT_ASKPASS_NODE: string
    GIT_ASKPASS: string
    HOMEBREW_CELLAR: string
    INFOPATH: string
    RUBY_VERSION: string
    COLORTERM: string
    _: string
    PM2_USAGE: string
    PM2_HOME: string
    "wibu-app_3003": WibuApp3003
    unique_id: string
}

export interface WibuApp3003 { }

export interface AxmMonitor { }

export interface AxmOptions { }

export interface AxmDynamic { }

export interface Monit {
    memory: number
    cpu: number
}
