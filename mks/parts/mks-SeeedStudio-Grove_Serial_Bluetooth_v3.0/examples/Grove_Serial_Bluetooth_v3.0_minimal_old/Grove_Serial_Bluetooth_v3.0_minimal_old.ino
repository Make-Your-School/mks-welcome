
#include <SoftwareSerial.h>                         // Software Serial Port

#define RxD         6
#define TxD         7

#define PINBUTTON   5                               // pin of button

#define DEBUG_ENABLED  1

SoftwareSerial blueToothSerial(RxD,TxD);

void setup()
{
    Serial.begin(9600);
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    pinMode(PINBUTTON, INPUT);
    
    setupBlueToothConnection();
    //wait 1s and flush the serial buffer
    delay(1000);
    Serial.flush();
    blueToothSerial.flush();
}

void loop()
{
    
    static unsigned char state = 0;             // led off
    
    if(digitalRead(PINBUTTON))
    {
        state = 1-state;
        
        Serial.println("button on");
        
        blueToothSerial.print(state);
        
        delay(10);
        while(digitalRead(PINBUTTON))       // until button release
        {
            delay(10);
        }
        
        Serial.println("button off");
    }
}

/***************************************************************************
 * Function Name: setupBlueToothConnection
 * Description:  initilizing bluetooth connction
 * Parameters: 
 * Return: 
***************************************************************************/
void setupBlueToothConnection()
{

    
    blueToothSerial.begin(9600);  
    
    blueToothSerial.print("AT");
    delay(400); 
    
    blueToothSerial.print("AT+DEFAULT");             // Restore all setup value to factory setup
    delay(2000); 
    
    blueToothSerial.print("AT+NAMESeeedMaster");    // set the bluetooth name as "SeeedMaster" ,the length of bluetooth name must less than 12 characters.
    delay(400);
    
    blueToothSerial.print("AT+ROLEM");             // set the bluetooth work in slave mode
    delay(400); 
    
    
    blueToothSerial.print("AT+AUTH1");            
    delay(400);    
    
    blueToothSerial.print("AT+CLEAR");             // Clear connected device mac address
    delay(400);   
    
    blueToothSerial.flush();
    
    
}
