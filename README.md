# seguro-autos
**Enlace**:[Cotizador de Seguro de Automóviles](https://cotizador-autos-leo-torres.netlify.app/)

## Calculos implementados
1. Tendremos una base de la cual empezaremos a cotizar el seguro. Base = 3000
2. Por cada año que pase, se le restara el 3% a la base. (Entre más viejo sea el automóvil, más barato será el seguro)
``` calc
resultado -= (diferencia * 3 * resultado) / 100;
```
3. Cada marca tiene un porcentaje con respecto a la base. (Europeo=30%, Americano=15%, Asiático=5%)
``` calc
resultado *= calcularMarca(datos.marca);
```
4.  Cada Plan tendrá su porcentaje de incremento a calcular. (Básico=20%, Completo=50%)
``` calc
resultado *= calcularPlan(datos.plan);
```
