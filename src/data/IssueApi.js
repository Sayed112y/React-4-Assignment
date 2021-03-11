import axios from 'axios';

let currentID = 3;
//const _clone = function(item) {
//	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
//};

export default class IssueApi
{
	static getAllIssues(cb) {
		axios.get('http://localhost:3001/issues')
			.then(response => cb(response.data))
			.catch(error => { throw error });
	}
	static saveIssue(issue,cb){
		let newIssue={
			"id":issue.id,
			"issuedescription":issue.issuedescription,
			"severity":issue.severity,
			"status":issue.status
		}
		axios.post('http://localhost:3001/issues',newIssue)
		.then(() => cb(newIssue))
		.catch(error => { throw error });
	}
	
		
	
	}

	

