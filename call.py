# Download the helper library from https://www.twilio.com/docs/python/install
import os
import time
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = 
auth_token = 
client = Client(account_sid, auth_token)
todo = input("Enter your reminders>> ")
print(todo)
time.sleep(10)
call = client.calls.create(
                        twiml='<Response><Say>Mask, Submit to Devpost, Bring USB Drive, check on mum</Say></Response>',
                        from_=
						to=
                    )
