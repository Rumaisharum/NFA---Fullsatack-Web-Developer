<h1>Daftar Penulis</h1>
<ul>
@foreach($authors as $author)
    <li>{{ $author['name'] }} - {{ $author['bio'] }}</li>
@endforeach
</ul>