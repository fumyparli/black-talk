# black-talk

this is web-chat open source.

this app was made using "express + mysql(sequelize)". 

you can use this app by "git clone https://github.com/fumyparli/black-talk".

you have to set up '.env' as the file below.
<pre>
<code>
COOKIE_SECRET=put your cookie_secret
SEQUELIZE_PASSWORD=put your sequelize_password
</code>
</pre>
you have to modify "my_ip" to your server ip in "views/chat.html" file
ex) const my_ip = http://localhost:80";

you can run this app by typing "npm run dev" for develop mode or "npm start" for production mode.


thank u for reading :)
