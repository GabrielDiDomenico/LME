var xmlPath = 'test.xml';
var xsdPath = 'test0.xsd';
var filesRoot = 'http://localhost/LME/xml/test/';

var statusNode = document.querySelector('#status');

var fetchFile = function(file, root) {
	return fetch(root + file).then(function(response) {
		return response.text().then(function(data) {
			return {
				path: file,
				data: data
			}
		});
	});
};

statusNode.textContent = 'Fetching XSD files…';

var fetchIndex = fetchFile('index.txt', filesRoot).then(function(file) {
	return file.data.trim().split('\n').filter(function(line) {
		return line;
	});
});

var fetchFiles = fetchIndex.then(function(files) {
	// fetch the DTD files
	var requests = files.map(function(file) {
		return fetchFile(file, filesRoot);
	});

	// fetch the XML file
	requests.push(fetchFile(xmlPath, './'));

	return Promise.all(requests);
});

fetchFiles.then(function(files) {
	statusNode.textContent = 'Validating XML…';

	console.log(files[0].data);
	var output = xmllint.validateXML({ xml: files[1].data, schema: files[0].data}).errors;
	if (output!=null) {
		statusNode.textContent = 'Validation errors:';
		document.getElementById('lint').textContent = output;
	} else {
		statusNode.textContent = 'Valid!';
		document.getElementById('xml').textContent = "The XML is Valid!";
	}
});
