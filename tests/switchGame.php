<?php

require "../assets/php/utils/cookie.php";

echo (readCookie("inGame") ?? "false");

updateCookie("inGame", readCookie("inGame") === "false" ? "true" : "false");
