function addAuthClick(){
    if (getCurrentUser()) {
        $(".user").text("Logout")
    } else {
        $(".user").text("Login")
    }
    supabase.auth.onAuthStateChange((event, session) => {
        if (event == "SIGNED_IN") {
            $(".user").text("Logout")
        }
        else {
            $(".user").text("Login")
        }
    })
    $(".user").click(function () {
        if (getCurrentUser()) {
            logout();
            $(".user").text("Login")
        } else {
            localStorage.setItem("redirect", window.location.href);
            window.location.href = "/user/login.html"
        }
    })
}