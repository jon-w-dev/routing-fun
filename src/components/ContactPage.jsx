function ContactPage() {
  return (
    <>
      <h1>CONTACT PAGE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        voluptatibus?
      </p>

      <form action='submit'>
        <label htmlFor='name'>name</label>
        <input type='text' name='name' id='name' />
        <label htmlFor='email'>email</label>
        <input type='text' email='email' id='email' />
        <label htmlFor='phone'>phone</label>
        <input type='text' phone='phone' id='phone' />
        <button>Contact Us!</button>
      </form>
    </>
  )
}

export default ContactPage
