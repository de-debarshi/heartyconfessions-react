import { useState } from 'react';
import ConfessionService from '../services/ConfessionService';

export default function SubmitConfession() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      const newConfession = {
        age: inputs.age,
        sex: inputs.sex,
        categories: inputs.categories,
        content: inputs.content
    };
        let confession = await ConfessionService.submitConfession(newConfession);
        let shareableLink = `/confession/${confession._id}`;

        console.log(shareableLink);
    }

    return (
      <div className="submit-confession-page">
        <h2>Confess</h2>
        <form onSubmit={handleSubmit}>
            <label>Enter your age:
                <input 
                    type="number" 
                    name="age" 
                    value={inputs.age || ""} 
                    onChange={handleChange}
                />
            </label>
            <select name="sex" value={inputs.sex} onChange={handleChange}> Gender
                <option value="" default>Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
            </select>
            <select name="categories" value={inputs.categories} onChange={handleChange}> Category
                <option value="" default>Select</option>
                <option value="Random">Random</option>
                <option value="Corporate">Corporate</option>
                <option value="Romance">Romance</option>
                <option value="Funny">Funny</option>
            </select>
            <textarea name="content" value={inputs.content} onChange={handleChange} />
            <input type="submit" />
        </form>
      </div>
    );
}