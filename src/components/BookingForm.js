const BookingForm = (props) => {
  const minDate = new Date().toISOString().substring(0, 10);
  function handleChange(e) {
    props.setData({...props.data, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submitForm(props.data);
    props.setData({
      name:'',
      email:'',
      date:"",
      time:"",
      guest:"",
      loc:"",
      occasion:"",
      requirement:"",
    });
  }

  const disableBtn = () => {
    return !(props.data.email &&props.data.date && props.data.time && props.data.loc && props.data.occasion);
  }

  return(
    <form onSubmit={handleSubmit}>
      <h1>Book Now</h1>
      <div className='lable'>
        <label htmlFor='name'>Name : </label>
        <input type='text' id='name' value={props.data.value} name="name" placeholder='Name'onChange={handleChange}/>
      </div>
      <div className='lable'>
        <label htmlFor='email'>Email : </label>
        <input type='email' id='email' value={props.data.value} name="email" placeholder='Email'onChange={handleChange}/>
      </div>
      <div className='lable'>
        <label htmlFor='date'> Choose Date : </label>
        <input type="date" id="date" value={props.data.date} min={minDate} name="date" onChange={handleChange}/>
      </div>

      <div className='lable'>
        <label htmlFor='time'>Choose Time : </label>
        <select id="time" value={props.data.time} name="time" onChange={handleChange}>
          <option>Select</option>
          {props.availableTimes?.map((option, index) => (
           <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className='lable'>
        <label htmlFor='numGuests'>Number of guests : </label>
        <input type="number" placeholder="1" min="1" max="10" id = "numGuests" value={props.data.guest} name="guest" onChange={handleChange}/>
      </div>

      <div className='lable'>
        <label htmlFor='tableLoc'>Table's Location : </label>
        <select id="tableLoc" value={props.data.loc} name="loc" onChange={handleChange}>
          <option>Select</option>
          <option>Indoor</option>
          <option>Outdoor</option>
        </select>
      </div>

      <div className='lable'>
        <label htmlFor='occasion'>Occasion : </label>
        <select id="occasion" name="occasion" value={props.data.occasion} onChange={handleChange}>
          <option>Select</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>
      <label htmlFor='requirments'>Special Requirements</label>
      <textarea id="requirments" name="requirement" value={props.data.requirement} onChange={handleChange}/>

      <button disabled={disableBtn()} type="submit">Make your reservation</button>
    </form>
    );
}

export default BookingForm;