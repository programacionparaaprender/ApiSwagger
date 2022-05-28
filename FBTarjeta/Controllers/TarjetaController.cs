﻿using FBTarjeta.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FBTarjeta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TarjetaController : ControllerBase
    {
        private readonly TarjetaCreditoService _tarjetaCreditoService;
        public TarjetaController(TarjetaCreditoService noticiaService)
        {
            this._tarjetaCreditoService = noticiaService;
        }

  
        [HttpGet]
        [Route("porTarjetaID/{tarjetaID}")]
        [ProducesResponseType(typeof(TarjetaCredito), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult porNoticiaID(int tarjetaID)
        {
            TarjetaCredito resultado = new TarjetaCredito();
            try {
                resultado = _tarjetaCreditoService.porTarjetaID(tarjetaID);
                //return Ok("Prueba de que todo funciona");
                //return HttpResult(200, resultado);
                return Ok(new { message = "La tarjeta se obtuvo de forma exitosa", data = resultado });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message, data = resultado });
            }
        }

        // GET: api/<TarjetaController>
        [HttpGet]
        [ProducesResponseType(typeof(TarjetaCredito), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Get()
        {
            List<TarjetaCredito> resultado = new List<TarjetaCredito>();
            try
            {
                resultado = _tarjetaCreditoService.ObtenerTarjetas();
                return Ok(new { message = "Las tarjetas se han obtenido de forma exitosa", data = resultado });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message, data = resultado });
            }
        }

        // GET api/<TarjetaController>/5
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(TarjetaCredito), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Get(int id)
        {
            TarjetaCredito resultado = new TarjetaCredito();
            try
            {
                resultado = _tarjetaCreditoService.porTarjetaID(id);
                //return Ok("Prueba de que todo funciona");
                //return HttpResult(200, resultado);
                return Ok(new { message = "La tarjeta se obtuvo de forma exitosa", data = resultado });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message, data = resultado });
            }
        }

        // POST api/<TarjetaController>
        [HttpPost]
        [ProducesResponseType(typeof(TarjetaCredito), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Post([FromBody] TarjetaCredito _tarjeta)
        {
            TarjetaCredito resultado = new TarjetaCredito();
            try
            {
                resultado = _tarjetaCreditoService.agregarTarjeta(_tarjeta);
                if (resultado.Id != 0)
                {
                    //Created
                    return Created("url", new { message = "La tarjeta fue creada de forma exitosa", data = resultado });
                }
                    
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "No se registro", data = resultado });
        }

        // PUT api/<TarjetaController>/5
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(TarjetaCredito), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Put(int id, [FromBody] TarjetaCredito _tarjeta)
        {
            try
            {
                if (id != _tarjeta.Id)
                {
                    return NotFound();
                }
                var resultado = _tarjetaCreditoService.editarTarjetaCredito(id, _tarjeta);

                if (resultado)
                    return Created("url", new { message = "La tarjeta fue actualizada de forma exitosa", data = _tarjeta });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "No se actualizo", data = _tarjeta });
        }

        // DELETE api/<TarjetaController>/5
        [HttpDelete("{id}")]
        [ProducesResponseType(typeof(TarjetaCredito), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Delete(int id)
        {
            TarjetaCredito _tarjeta = new TarjetaCredito();
            try
            {
                _tarjeta = _tarjetaCreditoService.porTarjetaID(id);
                var resultado = _tarjetaCreditoService.eliminarTarjeta(id);
                if (resultado)
                {
                    return Created("url", new { message = "La tarjeta fue eliminada de forma satisfactoria", data = _tarjeta });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "No se elimino", data = _tarjeta });
        }
    }
}
