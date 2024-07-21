class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  }

  get email(){
    return this.email.toUpperCase()
  }

  set email(){
    retu
  }

  get password() {
    return `${this._password}hitesh`
  }

  set password(value) {
    this._password = value
  }
}

const hitesh = new User("hitesh@hitesh.ai", "abc")
console.log(hitesh.password);