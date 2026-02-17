
// modified by Victor
// to calculate UV index directly
void setup(){

    Serial.begin(9600);
}

void loop()
{
    int sensorValue;
    long  sum=0;
    for(int i=0;i<1024;i++)// accumulate readings for 1024 times
    {
        sensorValue=analogRead(A0);
        sum=sensorValue+sum;
        delay(2);
    }
    long meanVal = sum/1024;  // get mean value
    Serial.print("The current UV index is:");
    Serial.print((meanVal*1000/4.3-83)/21);// get a detailed calculating expression for UV index in schematic files.
    Serial.print("\n");
    delay(20);

}
