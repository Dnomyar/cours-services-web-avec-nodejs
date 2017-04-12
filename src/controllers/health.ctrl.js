class HealthController {

  health(req, res) {
    res.status(204);
    res.send();
  }
}

module.exports = HealthController;
