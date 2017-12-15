#include<Ethernet.h>
#include<SPI.h>
#include<String.h>

byte mac[] = {0xDE, 0xAD, 0xBE, 0xFE, 0xED};
byte ip[] = {192, 168, 1, 177};
byte subnet[] = {255, 255, 255, 0};
byte gateway[] = {192, 168, 1, 1};
EthernetServer server(80);
void setup() {
  Ethernet.begin(mac,ip,gateway,subnet);
  
}

void loop() {
    EthernetClient client = server.available();
    client.println("HTTP/1.1 200 OK"); //dico al client che è tutt'ok - standard http
    client.println("Content-Type: text/html"); //indico il formato - standard http
    client.println(); //necessario per non buggare 
    client.println("<html>"); //inizio codice html
    client.println("<head><title>Accendi/Spegni led</title> <link rel='shortcut icon' type='image/x-icon' href='http://i44.servimg.com/u/f44/16/84/89/65/23570310.png' /></head>");
    client.println("<body><a href='/?led=1'>Accendi</a> - <a href='/?led=0'>Spegni</a></body");
    client.println("</html>"); //fine codice html
    client.stop(); //stop richieste dal client
}
