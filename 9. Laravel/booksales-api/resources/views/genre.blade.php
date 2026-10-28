<h1>Daftar Genre</h1>
<ul>
@foreach($genres as $genre)
    <li>{{ $genre['name'] }} - {{ $genre['desc'] }}</li>
@endforeach
</ul>