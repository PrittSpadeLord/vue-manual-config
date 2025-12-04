This project has been written to support both `npm` and `pnpm`. However, since Windows and Linux handle environmental variables differently, users of this project are requested to use only POSIX-based shells to build this application:

- If you are on Linux or MacOS, or even Android Termux, you need not change anything.

- If you are on Windows, I recommend setting Git Bash as the script shell for your preferred choice of package manager by setting `npm config set script-shell "path\to\your\bash.exe"` or `pnpm config set script-shell "path\to\your\bash.exe"`.