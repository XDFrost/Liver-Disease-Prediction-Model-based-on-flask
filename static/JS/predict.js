let button = document.getElementById('signupbutton');
let before_predict = document.getElementById('before');
let after_predict = document.getElementById('after');

button.addEventListener('click', function(e) {
    e.preventDefault();
    before_predict.style.display = 'none';
    after_predict.style.display = 'block';
});
