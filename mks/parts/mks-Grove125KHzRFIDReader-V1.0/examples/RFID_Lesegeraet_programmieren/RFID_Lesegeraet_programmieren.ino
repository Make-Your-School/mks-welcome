
#include <SoftwareSerial.h>

SoftwareSerial SoftSerial(2, 3);           


 

char Karten_ID[64];                    
char Zwischenspeicher;
int Zaehler = 0;                              
bool zugang_erlaubt = false;     
           
char Zugangskarte[12] = "020077115F3B";    


void setup()
{
  SoftSerial.begin(9600);                   
  Serial.begin(9600);                       
}

void loop()
{

  if (SoftSerial.available())                                       
  {
    Zwischenspeicher = SoftSerial.read();                                


    if (Zwischenspeicher == 0x02) {                                      
      Zaehler = 0;                                                    
      clear_card_value();                                           
    }

    else if (Zwischenspeicher == 0x03) {             
                    
      if (strcmp(Karten_ID, Zugangskarte) == 0) {       
       
        zugang_erlaubt = 1;                                         
      }

      else {
        zugang_erlaubt = 0;
      }

      Serial.println(Karten_ID);                               
      Serial.println("Zugang erlaubt: " + String(zugang_erlaubt));
    }

    else {
      Karten_ID[Zaehler] = Zwischenspeicher;                          
      Zaehler += 1;                                                   
    }
  }
}

void clear_card_value() {
  for (int i = 0; i < 64; i++) {

    Karten_ID[i] = NULL;
  }
} 
