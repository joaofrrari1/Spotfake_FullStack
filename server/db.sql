-- Inserindo os artistas
INSERT INTO artists (nome, bio, "imageUrl", "createdAt", "updatedAt") VALUES
('Matue', 'Cantor e compositor brasileiro, conhecido por sua música trap e letras impactantes.', 'https://example.com/matue.jpg', NOW(), NOW()),
('Freddie Mercury', 'Vocalista icônico da banda Queen, conhecido por sua voz única e performances lendárias.', 'https://example.com/freddie.jpg', NOW(), NOW()),
('Kurt Cobain', 'Líder da banda Nirvana, uma das maiores figuras do grunge dos anos 90.', 'https://example.com/kurt.jpg', NOW(), NOW());

-- Inserindo os álbuns
INSERT INTO albums (title, "releaseYear", "coverImageUrl", "createdAt", "updatedAt", artista_id) VALUES
('Máquina do Tempo', 2020, 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2020/11/13/matue-youtube.jpg', NOW(), NOW(), 1),
('Live Aid', 1985, 'https://example.com/liveaid.jpg', NOW(), NOW(), 2),
('Nevermind', 1991, 'https://example.com/nevermind.jpg', NOW(), NOW(), 3);

-- Inserindo as músicas
INSERT INTO musicas (titulo, duracao, "fileUrl", "createdAt", "updatedAt", artista_id, album_id) VALUES
-- Matuê
('Máquina do Tempo', 180, 'https://example.com/maquinadotempo.mp3', NOW(), NOW(), 1, 1),
('Quer Voar', 200, 'https://example.com/quervoar.mp3', NOW(), NOW(), 1, 1),
('777-666', 220, 'https://example.com/777666.mp3', NOW(), NOW(), 1, 1),

-- Freddie Mercury (Queen)
('Bohemian Rhapsody', 355, 'https://example.com/bohemian.mp3', NOW(), NOW(), 2, 2),
('Radio Ga Ga', 340, 'https://example.com/radiogaga.mp3', NOW(), NOW(), 2, 2),
('We Are the Champions', 180, 'https://example.com/champions.mp3', NOW(), NOW(), 2, 2),

-- Kurt Cobain (Nirvana)
('Smells Like Teen Spirit', 301, 'https://example.com/teen_spirit.mp3', NOW(), NOW(), 3, 3),
('Come As You Are', 219, 'https://example.com/comeasyouare.mp3', NOW(), NOW(), 3, 3),
('Lithium', 256, 'https://example.com/lithium.mp3', NOW(), NOW(), 3, 3);
