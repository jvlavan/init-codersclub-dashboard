fetch("leaderboard.json")
	.then(function(response){
	   return response.json();
	})
	.then(function(products){
	   let placeholder = document.querySelector("#data-output");
	   let out = "";
	   for(let product of products){
	      out += `
	         <tr>
	            <td>${product.hacker_id}</td>
	            <td>${product.hacker}</td>
	            <td>${product.school}</td>
	            <td>${product.time_taken}</td>
	            <td>${product.score}</td>
	         </tr>
	      `;
	   }
	 
	   placeholder.innerHTML = out;
	});
    //https://www.hackerrank.com/rest/contests/w38/leaderboard