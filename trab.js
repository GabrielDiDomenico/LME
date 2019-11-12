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

function xmlQueryFilmes(xmlNode,identacao){
  var query=""; //esta var armazenara o conteudo
  var tag_atual=""; //variavel para salvar a tag atual
  var topic_id_atual="";//variavel para salvar o id do filme
  var attr_atual=""; //variavel para salvar o atributo da tag atual
  var link_filme=""; //variavel para salvar o link e não atrapalhar o caminho da arvore
  if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
    //query = query + identacao + xmlNode.childNodes[0].nodeName + ": "
    for(var i=0;i<xmlNode.childNodes[0].childNodes.length;i++){
      tag_atual = xmlNode.childNodes[0].childNodes[i].nodeName
      if(tag_atual=="topic"){
        topic_id_atual = xmlNode.childNodes[0].childNodes[i].attributes[0].value;
        if(xmlNode.childNodes[0].childNodes[i].childNodes[1].childNodes[1].nodeName=="topicRef"){
          attr_atual = xmlNode.childNodes[0].childNodes[i].childNodes[1].childNodes[1].attributes[0].value
          if(attr_atual=="#Filme"){
            link_filme="<a href='filmes.html?id="+ topic_id_atual +"'>"
            query = query + identacao + link_filme + xmlNode.childNodes[0].childNodes[i].childNodes[3].childNodes[1].textContent + "</a>" 
          }
        }
      }
    }
    //query = query + identacao + xmlNode.childNodes[0].childNodes[1129].nodeName + ": ";

   

  }
    
    return query;
}

function xmlQueryAtores(xmlNode){
  var query=""; //esta var armazenara o conteudo
  var tag_atual=""; //variavel para salvar a tag atual
  var topic_id_atual="";//variavel para salvar o id do filme
  var attr_atual=""; //variavel para salvar o atributo da tag atual
  var link_filme=""; //variavel para salvar o link e não atrapalhar o caminho da arvore
  if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
    //query = query + identacao + xmlNode.childNodes[0].nodeName + ": "
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
    //query = query + identacao + xmlNode.childNodes[0].nodeName + ": "
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
    //query = query + identacao + xmlNode.childNodes[0].nodeName + ": "
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
    //query = query + identacao + xmlNode.childNodes[0].nodeName + ": "
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
    //query = query + identacao + xmlNode.childNodes[0].nodeName + ": "
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


xml = xmlLoader("xml.xml"); //carrega o xml
document.write("<center>");
document.write("<h1>Site Giozão Movies</h1>");
document.write("<h2>Se quiser, filtre os filmes que estão disponíveis</h2>");
document.write("<h3>Ator: ");
document.write("<select>");
document.write(xmlQueryAtores(xml)); //printa a query na tela
document.write("</select> | Gênero: ");
document.write("<select>");
document.write(xmlQueryGeneros(xml)); //printa a query na tela
document.write("</select> | Diretor: ");
document.write("<select>");
document.write(xmlQueryDirecao(xml)); //printa a query na tela
document.write("</select> | Ano: ");
document.write("<select>");
document.write(xmlQueryAnos(xml)); //printa a query na tela
document.write("</select> | Duração: ");
document.write("<select>");
document.write(xmlQueryDuracao(xml)); //printa a query na tela
document.write("</select></h3>");
document.write(xmlQueryFilmes(xml,"<br>")); //printa a query na tela
