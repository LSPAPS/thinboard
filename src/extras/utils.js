function resetApp() {
    localStorage.clear()
    window.location.reload();
}
function aboutApp(){
    alert(
        "Thinboard\n\n" +
        "Version: 1.0.0\n" +
        "Author: hauptkern (github.com/hauptkern)\n" +
        "Forked from: https://github.com/apankrat/nullboard\n\n"+
        "License: The 2-clause BSD license with the Commons Clause condition.\n\n"
    );
}