
signupbtn.onclick = async function () {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name && email && password) {
        try {
            let response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            let data = await response.json();
            if (response.ok) {
                alert(data.message);  
                window.location.href = "homepage.html"; 
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    } else {
        alert("All fields are required.");
    }
};


signinbtn.onclick = async function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        try {
            let response = await fetch('http://localhost:5000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            let data = await response.json();
            if (response.ok) {
                alert(data.message);
                window.location.href = "homepage.html";
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    } else {
        alert("Email and Password are required.");
    }
};
