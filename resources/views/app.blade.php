<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    {{-- Icon --}}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    {{-- CSS Style --}}
    @vite('resources/css/app.css')
    
    @vite('resources/js/app.jsx')
    @inertiaHead
  </head>
  <body class="bg-gray-100">
    @inertia
  </body>
</html>