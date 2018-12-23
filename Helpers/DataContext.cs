using Microsoft.EntityFrameworkCore;
using WebApi.Entities;

namespace WebApi.Helpers
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
/*
Add-Migrations “nome_migrations” – cria um alteração no banco de dados, onde o “nome_migrations” 
                                   é o nome que você irá dar para a atualização;
Update-DataBase – aplica as alterações no banco de dados;
Update-DataBase – script – gera um script com os comandos SQL para serem executados no banco de dados.
*/