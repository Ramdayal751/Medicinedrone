function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
   
  if (username === "ram" && password === "987456321@") {
    alert("Login successful!");
    window.open('http://192.168.229.39/');
  }
  else if (username === "dhiraj" && password === "06061999") {
    alert("Login successful!");
    window.open('http://192.168.229.39/');
  }
  else if (username === "abc" && password === "12345@") {
    alert("Login successful!");
    window.open('http://192.168.229.39/');
  }
  else if (username === "bkp" && password === "bh12@#ra") {
    alert("Login successful!");
    window.open('http://192.168.229.39/');
  }
  else {
    alert("Invalid username or password");
  }
}
