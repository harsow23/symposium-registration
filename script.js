document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var institution = document.getElementById('institution').value.trim();
    var Department = document.getElementById('Department').value.trim();
    var phone = document.getElementById('phone').value.trim();
    


    // Perform validation (you can add more validation as needed)
    if (name === '' || email === ''||institution ==='' ||Department ==='') {
        alert('Please fill out all required fields.');
        return;
    }

    // If all validation passed, you can proceed with form submission or other actions
    alert('Registration successful!\nName: ' + name + '\nEmail: ' + email + '\nInstitution: ' + institution +'\nDepartment:'+ Department +'\nphone'+ phone);
});
