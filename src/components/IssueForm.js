import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'


const IssueForm = ({ values, errors, touched, isSubmitting }) => (
    
    <div>
        <h1>Issue Form</h1>
        <Form > 
            Description:
            <div>
                <Field type="text" name="issuedescription" placeholder="Enter the description"/>
                {touched.issuedescription && errors.issuedescription && <span style={{ color: 'red' }}>{errors.issuedescription}</span>}
            </div>
            <div>
              <label>
                 Severity:      
                  <select>
                    <option value="Minor">Minor</option>
                    <option value="Major">Major</option>
                    <option value="Critical">Critical</option>
                  </select>
              </label>
           </div>

            <div>
              Status:
                <label>
                    <Field type="radio" value="status" name="open" />
                    Open
                    
                    <Field type="radio" value="status" name="inprogress" />
                    In Progress
                    
                    <Field type="radio" value="status" name="closed" />
                    Closed
                </label>
            </div>
            <br/>
            <button type="submit" value="Submit" disabled={isSubmitting}>Submit</button>
        </Form>
    </div>
)

const FormikIssueForm = withFormik({
    mapPropsToValues({issuedescription}) {
        return {
            issuedescription: issuedescription || ''
            
    
        }
    },
    validationSchema: Yup.object().shape({
        issuedescription: Yup.string().required('IssueDescription is required')
    }),
    onSubmit(values, { resetForm,setSubmitting }) {
        console.log(values);
        setTimeout(() => {
            resetForm()
                alert(JSON.stringify(values));
            
			setSubmitting(false);
        }, 2000);
    }
})(IssueForm)

export default FormikIssueForm
