var titulo = document.getElementById('titulo');
	var h1 = document.createElement("h1");
	h1.innerHTML = 'Alumnas Santiago de Chile 2016-2';
	titulo.appendChild(h1);

	var girl = document.getElementById('girl');
	for (var i=0; i<data.SCL['2016-2'].students.length; i++) {

		var image = document.createElement('img');
		var paragraph = document.createElement('p');
		var sprints = document.createElement('p');

		var photo = data.SCL['2016-2'].students[i].photo;
		var paragraphName = data.SCL['2016-2'].students[i].name;
		var sprintsData = data.SCL['2016-2'].students[i].sprints.number;

		image.setAttribute("src", photo);
		//paragraph.appendChild(paragraphName);
		paragraph.textContent = paragraphName;
		sprints.textContent = sprintsData;
		girl.appendChild(image);
		girl.appendChild(paragraph);
		girl.appendChild(sprints);


} 