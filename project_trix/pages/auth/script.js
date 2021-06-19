const errorBlock = document.getElementById('error')
const form = document.querySelector('.form')
const loginPage = document.getElementById('login')
const registerPage = document.getElementById('register')
const rulesPage = document.querySelector('.rules')
const emailLoginInput = document.getElementById('log-login')
const passwordLoginInput = document.getElementById('log-password')

const emailRegisterInput = document.getElementById('reg-login')
const passwordRegisterInput = document.getElementById('reg-password')
const passwordConfirmInput = document.getElementById('reg-password-confirm')


const showRulesButton = document.querySelector('#showRulesButton')
const rulesBackButton = document.querySelector('#rulesBackButton')

const rulesCheckBox = document.querySelector('#rulesCheckBox')
const subscribeCheckBox = document.querySelector('#rulesCheckBox')

const postToMailchimpURL = 'https://s1.trixrp.ru:1000/addsubscriber'

rulesBackButton.addEventListener('click', () => {
    rulesPage.style.display = 'none';
    form.style.display = 'block'
})

showRulesButton.addEventListener('click', () => {
    rulesPage.style.display = 'block';
    form.style.display = 'none'
})

function validateEmail(email) {
    let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
  }

function showRegister(){
    resetError();
    loginPage.style.display = 'none';
    registerPage.style.display = 'block';
}

function showLogin(){
    resetError();
    loginPage.style.display = 'block';
    registerPage.style.display = 'none';
}

function loginAttempt(){
    const login = emailLoginInput.value;
    const password = passwordLoginInput.value;
    resetError();

    if (!validateEmail(login)) {
        return showError('Неправильный формат почты')
    }

    if(!password || password.length < 6){
        return showError('Введите Пароль');
    }

    mp.trigger('loginAttempt', JSON.stringify({login, password}) );
}

function registerAttempt(){
    const login = emailRegisterInput.value;
    const password = passwordRegisterInput.value;
    const passwordConfirm = passwordConfirmInput.value;
    resetError();

    console.log(validateEmail(login))

    // if (!validateEmail(login)) {
    //     return showError('Неправильный формат почты')
    // }

    // if(!password || password.length < 6){
    //     return showError('Введите Пароль');
    // }

    // if(password !== passwordConfirm){
    //     return showError('Пароли не совпадают');
    // }

    if(!rulesCheckBox.checked){
        return showError('Ознакомься и прими Правила сервера');
    }

    if(subscribeCheckBox.checked){
        postEmailToMailchimp()
    }

    // mp.trigger('registerAttempt', JSON.stringify({login, password}) );
}

function showError(message){
    errorBlock.innerText = message;
    errorBlock.style.visibility = 'visible';
}

function resetError(){
    errorBlock.innerText = 'message';
    errorBlock.style.visibility = 'hidden';
}

const postEmailToMailchimp = async () => {
    let formData = new FormData();
    formData.append('email', login);

    const data = new URLSearchParams(new FormData(registerPage));
    await fetch(postToMailchimpURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    }).catch((err) => console.log('Fetch to mailchimp catch error is ', err))
    console.log(login)
    // const data = await response.json()
    
}