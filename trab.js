console.log("oi");

//Para carregar o arquivo XML em todos os navegadores

function xmlLoader(url){
  if(window.XMLHttpRequest){
    var Loader = new XMLHttpRequest();
    Loader.open("GET", url ,false);
    Loader.send(null);
    return Loader.responseXML;
  }else if(window.ActiveXObject){
    var Loader = new ActiveXObject("Msxml2.DOMDocument.3.0");
    Loader.async = false;
    Loader.load(url);
    return Loader;
  }
}

//Função para trabalhar com o arqv XML

function xmlQueryFilmes(xmlNode){
  topic_id_sem_hash = location.search.slice(4);//var que armazena conteúdo do GET
  var topic_id_com_hash="#"; 
  topic_id_com_hash += topic_id_sem_hash;//var que armazena conteúdo do GET com uma hashtag
  topic_id_filme="";
  var filmes_relacionados = new Array();
  var query=""; //esta var armazenara o conteudo
  var tag_atual=""; //variavel para salvar a tag atual
  var topic_id_atual="";//variavel para salvar o id do filme
  var attr_atual=""; //variavel para salvar o atributo da tag atual
  var link_filme=""; //variavel para salvar o link e não atrapalhar o caminho da arvore
  var j=0;
  for(var p=0;p<xmlNode.childNodes[0].childNodes.length;p++){
    if(xmlNode.childNodes[0].childNodes[p].nodeName == "association"){
      if(xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-elenco" || 
         xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-genero" ||
         xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-direcao" ||
         xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-duracao" ||
         xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-ano"){
        if(xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value == topic_id_com_hash){
          filmes_relacionados[j]=xmlNode.childNodes[0].childNodes[p].childNodes[3].childNodes[1].attributes[0].value.slice(1)
          console.log(filmes_relacionados[j]);
          j++;
        }  
      }
    }
    
  }

  if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
    //query = query + xmlNode.childNodes[0].nodeName + ": "
    for(var i=0;i<xmlNode.childNodes[0].childNodes.length;i++){
      tag_atual = xmlNode.childNodes[0].childNodes[i].nodeName
      if(tag_atual=="topic"){
        topic_id_atual = xmlNode.childNodes[0].childNodes[i].attributes[0].value;
        if(xmlNode.childNodes[0].childNodes[i].childNodes[1].childNodes[1].nodeName=="topicRef"){
          attr_atual = xmlNode.childNodes[0].childNodes[i].childNodes[1].childNodes[1].attributes[0].value
          if(attr_atual=="#Filme"){
            if(topic_id_com_hash=="#"){
              link_filme="<li><a href='filmes.html?id="+ topic_id_atual +"'>"
              query = query + link_filme + xmlNode.childNodes[0].childNodes[i].childNodes[3].childNodes[1].textContent + "</a></li>" 
            }else{
              for(var z=0; z<=filmes_relacionados.length;z++){
                if(filmes_relacionados[z]==xmlNode.childNodes[0].childNodes[i].attributes[0].value){
                  link_filme="<li><a href='filmes.html?id="+ topic_id_atual +"'>"
                  query = query + link_filme + xmlNode.childNodes[0].childNodes[i].childNodes[3].childNodes[1].textContent + "</a></li>" 
                }
              }
            }
          }
        }
      }
    }
  }
    
    return "<ul style='list-style-type: none; padding: 0;'>" + query + "</ul>";
}

function xmlQueryAtores(xmlNode){
  var query=""; //esta var armazenara o conteudo
  var tag_atual=""; //variavel para salvar a tag atual
  var topic_id_atual="";//variavel para salvar o id do filme
  var attr_atual=""; //variavel para salvar o atributo da tag atual
  var link_filme=""; //variavel para salvar o link e não atrapalhar o caminho da arvore
  if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
    //query = query + xmlNode.childNodes[0].nodeName + ": "
    for(var i=0;i<xmlNode.childNodes[0].childNodes.length;i++){
      tag_atual = xmlNode.childNodes[0].childNodes[i]
      if(tag_atual.nodeName=="topic"){
        topic_id_atual = tag_atual.childNodes[1];
        if(topic_id_atual.nodeName=="instanceOf"){
          if(topic_id_atual.childNodes[1].attributes[0].value=="#Elenco"){
            attr_atual=tag_atual.attributes[0].value;
            //query+="<a href='atores.html/id=" + attr_atual + ">";
            query+="<option value='"+attr_atual+"'>";
            query+= tag_atual.childNodes[3].childNodes[1].textContent;
            query+="</option>";
          } 
        } 
      }
    }
  }
    return query;
}

function xmlQueryGeneros(xmlNode){
  var query=""; //esta var armazenara o conteudo
  var tag_atual=""; //variavel para salvar a tag atual
  var topic_id_atual="";//variavel para salvar o id do filme
  var attr_atual=""; //variavel para salvar o atributo da tag atual
  var link_filme=""; //variavel para salvar o link e não atrapalhar o caminho da arvore
  if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
    //query = query + xmlNode.childNodes[0].nodeName + ": "
    for(var i=0;i<xmlNode.childNodes[0].childNodes.length;i++){
      tag_atual = xmlNode.childNodes[0].childNodes[i]
      if(tag_atual.nodeName=="topic"){
        topic_id_atual = tag_atual.childNodes[1];
        if(topic_id_atual.nodeName=="instanceOf"){
          if(topic_id_atual.childNodes[1].attributes[0].value=="#Genero"){
            if(attr_atual==tag_atual.attributes[0].value){
              continue;
            }
            attr_atual=tag_atual.attributes[0].value;
            //query+="<a href='atores.html/id=" + attr_atual + ">";
            query+="<option value='"+attr_atual+"'>";
            query+= tag_atual.childNodes[3].childNodes[1].textContent;
            query+="</option>";
          } 
        } 
      }
    }
  }
    return query;
}

function xmlQueryDirecao(xmlNode){
  var query=""; //esta var armazenara o conteudo
  var tag_atual=""; //variavel para salvar a tag atual
  var topic_id_atual="";//variavel para salvar o id do filme
  var attr_atual=""; //variavel para salvar o atributo da tag atual
  var link_filme=""; //variavel para salvar o link e não atrapalhar o caminho da arvore
  if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
    //query = query + xmlNode.childNodes[0].nodeName + ": "
    for(var i=0;i<xmlNode.childNodes[0].childNodes.length;i++){
      tag_atual = xmlNode.childNodes[0].childNodes[i]
      if(tag_atual.nodeName=="topic"){
        topic_id_atual = tag_atual.childNodes[1];
        if(topic_id_atual.nodeName=="instanceOf"){
          if(topic_id_atual.childNodes[1].attributes[0].value=="#Direcao"){
            if(attr_atual==tag_atual.attributes[0].value){
              continue;
            }
            attr_atual=tag_atual.attributes[0].value;
            //query+="<a href='atores.html/id=" + attr_atual + ">";
            query+="<option value='"+attr_atual+"'>";
            query+= tag_atual.childNodes[3].childNodes[1].textContent;
            query+="</option>";
          } 
        } 
      }
    }
  }
    return query;
}

function xmlQueryAnos(xmlNode){
  var query=""; //esta var armazenara o conteudo
  var tag_atual=""; //variavel para salvar a tag atual
  var topic_id_atual="";//variavel para salvar o id do filme
  var attr_atual=""; //variavel para salvar o atributo da tag atual
  var link_filme=""; //variavel para salvar o link e não atrapalhar o caminho da arvore
  if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
    //query = query + xmlNode.childNodes[0].nodeName + ": "
    for(var i=0;i<xmlNode.childNodes[0].childNodes.length;i++){
      tag_atual = xmlNode.childNodes[0].childNodes[i]
      if(tag_atual.nodeName=="topic"){
        topic_id_atual = tag_atual.childNodes[1];
        if(topic_id_atual.nodeName=="instanceOf"){
          if(topic_id_atual.childNodes[1].attributes[0].value=="#Ano"){
            if(attr_atual==tag_atual.attributes[0].value){
              continue;
            }
            attr_atual=tag_atual.attributes[0].value;
            //query+="<a href='atores.html/id=" + attr_atual + ">";
            query+="<option value='"+attr_atual+"'>";
            query+= tag_atual.childNodes[3].childNodes[1].textContent;
            query+="</option>";
          } 
        } 
      }
    }
  }
    return query;
}

function xmlQueryDuracao(xmlNode){
  var query=""; //esta var armazenara o conteudo
  var tag_atual=""; //variavel para salvar a tag atual
  var topic_id_atual="";//variavel para salvar o id do filme
  var attr_atual=""; //variavel para salvar o atributo da tag atual
  var link_filme=""; //variavel para salvar o link e não atrapalhar o caminho da arvore
  if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
    //query = query + xmlNode.childNodes[0].nodeName + ": "
    for(var i=0;i<xmlNode.childNodes[0].childNodes.length;i++){
      tag_atual = xmlNode.childNodes[0].childNodes[i]
      if(tag_atual.nodeName=="topic"){
        topic_id_atual = tag_atual.childNodes[1];
        if(topic_id_atual.nodeName=="instanceOf"){
          if(topic_id_atual.childNodes[1].attributes[0].value=="#Duracao"){
            if(attr_atual==tag_atual.attributes[0].value){
              continue;
            }
            attr_atual=tag_atual.attributes[0].value;
            //query+="<a href='atores.html/id=" + attr_atual + ">";
            query+="<option value='"+attr_atual+"'>";
            query+= tag_atual.childNodes[3].childNodes[1].textContent + " min";
            query+="</option>";
          } 
        } 
      }
    }
  }
    return query;
}

function carregaPaginaAtor(id){
  window.location.assign("trab.html?id="+id);
}
function carregaPaginaGenero(id){
  window.location.assign("trab.html?id="+id);
}
function carregaPaginaDirecao(id){
  window.location.assign("trab.html?id="+id);
}
function carregaPaginaAnos(id){
  window.location.assign("trab.html?id="+id);
}
function carregaPaginaDuracao(id){
  window.location.assign("trab.html?id="+id);
}

$('#duracao').ready(function() {
  $('#ator option').each(function() {
    // se localizar a frase, define o atributo selected
    if($(this).attr('value') == topic_id_sem_hash) {
      $(this).attr('selected', true);
    }
  });
  $('#genero option').each(function() {
    // se localizar a frase, define o atributo selected
    if($(this).attr('value') == topic_id_sem_hash) {
      $(this).attr('selected', true);
    }
  });
  $('#ano option').each(function() {
    // se localizar a frase, define o atributo selected
    if($(this).attr('value') == topic_id_sem_hash) {
      $(this).attr('selected', true);
    }
  });
  $('#diretor option').each(function() {
    // se localizar a frase, define o atributo selected
    if($(this).attr('value') == topic_id_sem_hash) {
      $(this).attr('selected', true);
    }
  });
  $('#duracao option').each(function() {
    // se localizar a frase, define o atributo selected
    if($(this).attr('value') == topic_id_sem_hash) {
      $(this).attr('selected', true);
    }
  });
});



xml = xmlLoader("xml.xml"); //carrega o xml
document.write("<center>");
document.write("<h1 style='font-size: 5rem'>Giozão Movies</h1>");
document.write(`<img src='gio.jpeg' style="margin:1rem 0; width: 200px">`);
document.write("<h3>Se quiser, filtre os filmes que estão disponíveis</h3>");
document.write("<h3>OBS: As buscas são feitas uma por vez</h3><br>");
document.write(`<div class="container" style="margin: 0 0 2rem 0">`);
document.write(`<div class="row search-options">`);
    document.write(`<div class="col-md">Ator:<br>`);
      document.write(`<select id='ator' onchange='carregaPaginaAtor(this.value);' class="form-control">`);
      document.write(xmlQueryAtores(xml)); //printa a query na tela
    document.write(`</select> </div><div class="col-md">Gênero:<br>`);
      document.write(`<select id='genero' onchange='carregaPaginaGenero(this.value);' class="form-control">`);
      document.write(xmlQueryGeneros(xml)); //printa a query na tela
    document.write(`</select> </div><div class="col-md"> Diretor:<br>`);
      document.write(`<select id='diretor' onchange='carregaPaginaDirecao(this.value);' class="form-control">`);
      document.write(xmlQueryDirecao(xml)); //printa a query na tela
    document.write(`</select> </div><div class="col-md"> Ano:<br>`);
      document.write(`<select id='ano' onchange='carregaPaginaAnos(this.value);' class="form-control">`);
      document.write(xmlQueryAnos(xml)); //printa a query na tela
    document.write(`</select> </div><div class="col-md"> Duração:<br>`);
      document.write(`<select id='duracao' onchange='carregaPaginaDuracao(this.value);' class="form-control">`);
      document.write(xmlQueryDuracao(xml)); //printa a query na tela
    document.write("</select> </div>");
  document.write(`</div>`);
document.write(`</div>`);
//document.write("<h3>Se você quer voltar para todos os filmes clique no botão</h3>");
document.write(`<a href='trab.html'><button class="btn btn-primary" style="margin: 0 0 1rem 0">Zerar Pesquisa</button></a>`);
document.write(xmlQueryFilmes(xml)); //printa a query na tela
document.write("</center>");
