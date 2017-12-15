
int val=0;
void setup() {
  // put your setup code here, to run once:
pinMode(13,OUTPUT);
pinMode(7,INPUT);
Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  val= digitalRead(7);
  if(val==HIGH){
    digitalWrite(13,HIGH);  
  }
  else{
    digitalWrite(13,LOW);  
  }
  delay(500);
}
