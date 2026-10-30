<h1>Daftar Buku</h1>
<ul>
@foreach($books as $book)
    <li>{{ $book->title }} - {{ $book->description }}</li>
@endforeach
</ul>