FBTarjetas
dotnet new angular -o FBTarjeta -f netcoreapp3.1

dotnet new sln
dotnet sln add .\FBTarjeta\FBTarjeta.csproj
dotnet sln add .\Common\Common.csproj
dotnet sln add .\Models\Models.csproj



### documentación de swagger
https://docs.microsoft.com/es-es/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-3.1&tabs=visual-studio

### visualizar swagger
https://localhost:44372/swagger/index.html
https://localhost:44372/swagger/v1/swagger.json


