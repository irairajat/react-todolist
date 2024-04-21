import './App.css';

function Input() {
    return (
        // <div className="form-row col-md-12">
        //     <div className="form-row col-md-10">
        //         <textarea className="form-control"></textarea>
        //     </div>
        //     <div className="form-row col-md-2">
        //         <button className="btn btn-primary">Save</button>
        //     </div>
        // </div>
        <div class="container">
            <textarea class="textarea" rows="4" cols="50"></textarea>
            <button class="button">Submit</button>
        </div>
    );
}
  
export default Input;