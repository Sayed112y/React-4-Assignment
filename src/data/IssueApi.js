import axios from 'axios';

let currentID = 3;
//const _clone = function(item) {
//	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
//};
//http://localhost:3001/issues
//https://my-json-server.typicode.com/typicode/demo/db

export default class IssueApi
{
	static getAllIssues(cb) {
		axios.get('https://my-json-server.typicode.com/typicode/demo/comments')
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
		axios.post('https://my-json-server.typicode.com/typicode/demo/comments',newIssue)
		.then(() => cb(newIssue))
		.catch(error => { throw error });
	}
	
		
	
	}

	

