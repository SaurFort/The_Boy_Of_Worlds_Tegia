<?php
$cookie = $_COOKIE["test"] ?? "vide";

echo $cookie;
?>

<button onclick="test()">Test</button>

<script>
  function test() {
    document.cookie = "test=somevalue; path=/";
  }
</script>
