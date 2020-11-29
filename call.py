# Download the helper library from https://www.twilio.com/docs/python/install
import os
import time
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = 'ACe7e6c068feb8a17b7b2d87d99f44b1b2'
auth_token = 'bc9c7485cbc1d2676e530c332041866f'
client = Client(account_sid, auth_token)
todo = input("Enter your reminders>> ")
print(todo)
time.sleep(10)
call = client.calls.create(
                        twiml='<Response><Say>Mask, Submit to Devpost, Bring USB Drive, check on mum</Say></Response>',
                        from_='+447481362111',
						to='+447906822233'
                    )