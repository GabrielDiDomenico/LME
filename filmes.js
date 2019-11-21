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

function xmlQueryTopicos(xmlNode,identacao){
  var i=0;//var que ira somar até encontrar o tópico certo
  var nao_achou = true;//var pra controlar o while
  var query=""; //esta var armazenara o conteudo
  var topic_id_sem_hash=""; 
  topic_id_sem_hash = location.search.slice(4);//var que armazena conteúdo do GET
  if(topic_id_sem_hash=="%C3%80-espera-de-um-milagre"){
    topic_id_sem_hash="À-espera-de-um-milagre"
  }
  var topic_id_com_hash="#"; 
  topic_id_com_hash += topic_id_sem_hash;//var que armazena conteúdo do GET com uma hashtag
  
  var tag_atual=""; //variavel para salvar a tag atual
  var encontrou_pela_id=false; //variavel que ira informar se encontrou na busca ou não
  //console.log(topic_id_sem_hash);
  if(topic_id_sem_hash=="animatrix"){
      document.write("Titulo: Animatrix<br><br>");
      document.write("Titulo Inglês: Animatrix<br><br>");
      document.write("Distribuição: Seção não encontrada :(<br><br>");
      document.write("Sinopse: Seção não encontrada :(<br><br>");
      document.write("Direção: Seção não encontrada :(<br><br>");
      document.write("Elenco: Seção não encontrada :(<br><br>");
      document.write("Elenco Apoio: Seção não encontrada :(<br><br>");
      document.write("Ano: Seção não encontrada :(<br><br>");
      document.write("Gênero: Seção não encontrada :(<br><br>");
      document.write("Site: Seção não encontrada :(<br><br>");
      nao_achou=false;
  }else if(topic_id_sem_hash=="a-profecia"){
    document.write("Titulo: A Profecia<br><br>");
    document.write("Titulo Inglês: The Omen<br><br>");
    document.write("Distribuição: Seção não encontrada :(<br><br>");
    document.write("Sinopse: Seção não encontrada :(<br><br>");
    document.write("Direção: Seção não encontrada :(<br><br>");
    document.write("Elenco: Seção não encontrada :(<br><br>");
    document.write("Elenco Apoio: Seção não encontrada :(<br><br>");
    document.write("Ano: Seção não encontrada :(<br><br>");
    document.write("Gênero: Terror<br><br>");
    document.write("Site: Seção não encontrada :(<br><br>");
    nao_achou=false;
  }else if(topic_id_sem_hash=="o-barco-do-amor"){
    document.write("Titulo: O Barco do Amor<br><br>");
    document.write("Titulo Inglês: Boat Trip<br><br>");
    document.write("Distribuição: Seção não encontrada :(<br><br>");
    document.write("Sinopse: Seção não encontrada :(<br><br>");
    document.write("Direção: Seção não encontrada :(<br><br>");
    document.write("Elenco: Seção não encontrada :(<br><br>");
    document.write("Elenco Apoio: Seção não encontrada :(<br><br>");
    document.write("Ano: Seção não encontrada :(<br><br>");
    document.write("Gênero: Seção não encontrada :(<br><br>");
    document.write("Site: Seção não encontrada :(<br><br>");
    nao_achou=false;
  }else if(topic_id_sem_hash=="amigas-para-sempre"){
    document.write("Titulo: Amigas para Sempre<br><br>");
    document.write("Titulo Inglês: Crossroads<br><br>");
    document.write("Distribuição: Seção não encontrada :(<br><br>");
    document.write("Sinopse: Seção não encontrada :(<br><br>");
    document.write("Direção: Seção não encontrada :(<br><br>");
    document.write("Elenco: Britney Spears<br><br>");
    document.write("Elenco Apoio: Seção não encontrada :(<br><br>");
    document.write("Ano: Seção não encontrada :(<br><br>");
    document.write("Gênero: Seção não encontrada :(<br><br>");
    document.write("Site: Seção não encontrada :(<br><br>");
    nao_achou=false;
  }else if(topic_id_sem_hash=="coyote-bar"){
    document.write("Titulo: Coyote Bar<br><br>");
    document.write("Titulo Inglês: Coyote Ugly<br><br>");
    document.write("Distribuição: Seção não encontrada :(<br><br>");
    document.write("Sinopse: Seção não encontrada :(<br><br>");
    document.write("Direção: Seção não encontrada :(<br><br>");
    document.write("Elenco: Seção não encontrada :(<br><br>");
    document.write("Elenco Apoio: Seção não encontrada :(<br><br>");
    document.write("Ano: Seção não encontrada :(<br><br>");
    document.write("Gênero: Seção não encontrada :(<br><br>");
    document.write("Site: Seção não encontrada :(<br><br>");
    nao_achou=false;
}
  
    while(nao_achou){
      
      if(xmlNode.childNodes[0].nodeType == 1){//ignorar espaços em branco
        //console.log(xmlNode.childNodes[0].childNodes[i]);
        if(xmlNode.childNodes[0].childNodes[i].nodeName == "topic" &&
          xmlNode.childNodes[0].childNodes[i].attributes[0].value == topic_id_sem_hash){
             //Path para pegar o titulo
             query = query + "Titulo: " + xmlNode.childNodes[0].childNodes[i].childNodes[3].childNodes[1].textContent + identacao + identacao;
            //Path para pegar o titulo em ingles
            query = query + "Titulo Inglês: " + xmlNode.childNodes[0].childNodes[i].childNodes[5].childNodes[3].textContent + identacao + identacao;
            //Path para pegar a distribuidora
            query = query + "Distribuição: " + xmlNode.childNodes[0].childNodes[i].childNodes[7].childNodes[3].textContent + identacao + identacao;
            //Path para pegar a sinopse
            query = query + "Sinopse: " + xmlNode.childNodes[0].childNodes[i].childNodes[9].childNodes[3].textContent + identacao + identacao;
            //Bloco de código para pegar a direção
            query = query + "Direção: " 
            for(var p=0;p<xmlNode.childNodes[0].childNodes.length;p++){
              if(xmlNode.childNodes[0].childNodes[p].nodeName == "association"){
                if(xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-direcao" && xmlNode.childNodes[0].childNodes[p].childNodes[3].childNodes[1].attributes[0].value == topic_id_com_hash){
                  encontrou_pela_id=true;
                  for(var k=0;k<xmlNode.childNodes[0].childNodes.length;k++){
                    if(xmlNode.childNodes[0].childNodes[k].nodeName == "topic"){
                      if(xmlNode.childNodes[0].childNodes[k].attributes[0].value ==
                        xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value.substr(1)){
                          query = query + "<a href='trab.html?id=" + xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value.substr(1) + "'>" +  xmlNode.childNodes[0].childNodes[k].childNodes[3].childNodes[1].textContent + "</a>" + ", "
                      }
                    }
                  }
                }
              }
            }
            if(encontrou_pela_id==false){
              query = query + "Seção não encontrada :("
            }
            query = query + identacao + identacao
            encontrou_pela_id=false;
            //Bloco de código para pegar o elenco
            query = query + "Elenco: " 
            for(var p=0;p<xmlNode.childNodes[0].childNodes.length;p++){
              if(xmlNode.childNodes[0].childNodes[p].nodeName == "association"){
                if(xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-elenco" && xmlNode.childNodes[0].childNodes[p].childNodes[3].childNodes[1].attributes[0].value == topic_id_com_hash){
                  encontrou_pela_id=true;
                  for(var k=0;k<xmlNode.childNodes[0].childNodes.length;k++){
                    if(xmlNode.childNodes[0].childNodes[k].nodeName == "topic"){
                      if(xmlNode.childNodes[0].childNodes[k].attributes[0].value ==
                        xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value.substr(1)){
                          query = query + "<a href='trab.html?id=" + xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value.substr(1) + "'>" +  xmlNode.childNodes[0].childNodes[k].childNodes[3].childNodes[1].textContent + "</a>" + ", "
                      }
                    }
                  }
                }
              }
            }
            if(encontrou_pela_id==false){
              query = query + "Seção não encontrada :("
            }
            query = query + identacao + identacao
            encontrou_pela_id=false;
            //Bloco de código para pegar o elenco apoio
            var j=11;//Var para indicar o caminho, começa no 11 pois é o inicial padrão para começar a mostrar o elenco apoio
            if(topic_id_sem_hash=="apollo-13" || topic_id_sem_hash=="genio-indomavel" || topic_id_sem_hash=="coracao-valente" || topic_id_sem_hash=="os-imperdoaveis"){
              query = query + "Elenco Apoio: "
              query = query + "Seção não encontrada :(" + identacao + identacao
              j-=2
            }else{
              query = query + "Elenco Apoio: "
              if(j==xmlNode.childNodes[0].childNodes[i].childNodes.length){
                continue;
              }else{
                while(xmlNode.childNodes[0].childNodes[i].childNodes[j].childNodes[1].childNodes[1].attributes[0].value=="#elencoApoio"){
                  query = query + xmlNode.childNodes[0].childNodes[i].childNodes[j].childNodes[3].textContent + ", ";
                  if(j+2==xmlNode.childNodes[0].childNodes[i].childNodes.length){
                    if(topic_id_sem_hash=="a-lista-de-schindler" || topic_id_sem_hash=="conan-o-barbaro" ||
                      topic_id_sem_hash=="conan-o-destruidor"){
                      j+=2;
                    }
                    
                    break;
                  }
                  j+=2;
                }
              }
              
              query = query + identacao + identacao;
            }
            
            //Bloco de código para pegar o ano
            query = query + "Ano: " 
            for(var p=0;p<xmlNode.childNodes[0].childNodes.length;p++){
              if(xmlNode.childNodes[0].childNodes[p].nodeName == "association"){
                if(xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-ano" && xmlNode.childNodes[0].childNodes[p].childNodes[3].childNodes[1].attributes[0].value == topic_id_com_hash){
                  encontrou_pela_id=true;
                  for(var k=0;k<xmlNode.childNodes[0].childNodes.length;k++){
                    if(xmlNode.childNodes[0].childNodes[k].nodeName == "topic"){
                      if(xmlNode.childNodes[0].childNodes[k].attributes[0].value ==
                        xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value.substr(1)){
                          query = query + "<a href='trab.html?id=" + xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value.substr(1) + "'>" +  xmlNode.childNodes[0].childNodes[k].childNodes[3].childNodes[1].textContent + "</a>" + ", "
                      }
                    }
                  }
                }
              }
            }
            if(encontrou_pela_id==false){
              query = query + "Seção não encontrada :("
            }
            query = query + identacao + identacao
            encontrou_pela_id=false;
            //Bloco de código para pegar o genero
            query = query + "Genero: "
            for(var p=0;p<xmlNode.childNodes[0].childNodes.length;p++){
              if(xmlNode.childNodes[0].childNodes[p].nodeName == "association"){
                if(xmlNode.childNodes[0].childNodes[p].childNodes[1].childNodes[1].attributes[0].value == "#filme-genero" && xmlNode.childNodes[0].childNodes[p].childNodes[3].childNodes[1].attributes[0].value == topic_id_com_hash){
                  encontrou_pela_id=true;
                  for(var k=0;k<xmlNode.childNodes[0].childNodes.length;k++){
                    if(xmlNode.childNodes[0].childNodes[k].nodeName == "topic"){
                      if(xmlNode.childNodes[0].childNodes[k].attributes[0].value ==
                        xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value.substr(1)){
                          query = query + "<a href='trab.html?id=" + xmlNode.childNodes[0].childNodes[p].childNodes[5].childNodes[1].attributes[0].value.substr(1) + "'>" + xmlNode.childNodes[0].childNodes[k].childNodes[3].childNodes[1].textContent + "</a>" + ", "
                      }
                    }
                  }
                }
              }
            }
            if(encontrou_pela_id==false){
              query = query + "Seção não encontrada :("
            }
            query = query + identacao + identacao
            encontrou_pela_id=false;
            //Path para pegar o site
            if(topic_id_sem_hash=="a-lista-de-schindler" || topic_id_sem_hash=="conan-o-barbaro" || topic_id_sem_hash=="conan-o-destruidor"){
              j-=2;
            }
            if(xmlNode.childNodes[0].childNodes[i].childNodes[j].childNodes[1].childNodes[1].attributes[0].value=="#elencoApoio" || (topic_id_sem_hash=="apollo-13" || topic_id_sem_hash=="genio-indomavel" || topic_id_sem_hash=="coracao-valente" || topic_id_sem_hash=="os-imperdoaveis")){
              query = query + "Site: Seção não encontrada :(" + identacao + identacao;
              nao_achou=false;
            }else{
              query = query + "Site: <a href='" + xmlNode.childNodes[0].childNodes[i].childNodes[j].childNodes[3].attributes[0].value+ "' target='_blank'>"+ xmlNode.childNodes[0].childNodes[i].childNodes[j].childNodes[3].attributes[0].value + "</a>"+ identacao + identacao;
              nao_achou=false;
            }
            
          
        }
      }
      i++;
    }
    
    //query = query + identacao + xmlNode.childNodes[0].childNodes[1129].nodeName + ": ";


  
    
    return query;
}

xml = xmlLoader("xml.xml"); //carrega o xml
document.write(xmlQueryTopicos(xml,"<br>")); //printa a árvore na tela
document.write("<center><a href='trab.html'><button class='btn btn-primary'>Voltar para o Home</button></a>");