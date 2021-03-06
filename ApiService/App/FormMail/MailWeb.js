const html = (data) => (`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>OPD BOOKS</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
    crossorigin="anonymous">

</head>
<style>
  .BackColorCon {
    background-color: #FFFFFF;
  }

  .paddingName {
    padding: 8px;
    padding-right: 12px;
    padding-left: 12px;
  }

  .texcenter {
    text-align: center;
  }

  .paddingCon {
    padding-left: 15%;
    padding-right: 15%;

  }
  .paddingMedical {
    padding: 5%;

  }

  @media only screen and (max-width: 812px) {
    h1 {
      font-size: 20px;
    }

    h6 {
      font-size: 8px;
    }

    p {
      font-size: 8px;
    }

    .paddingCon {
      padding-left: 0;
      padding-right: 0;

    }
  }
</style>

<body>
  <div class="jumbotron BackColorCon ">
    <!-- <h6 class="text-hide" style="background-image: url('./img/logoWeb.ico'); width: 50px; height: 50px;">Bootstrap</h6> -->
    <h1 class="display-4 text-info texcenter">OPD BOOKS</h1>
    <p class="card-subtitle mb-2 text-muted texcenter"><b>Hello, we are OPD BOOKS </b>By storing data across its peer
      to peer network,</p>
    <p class="card-subtitle mb-2 text-muted texcenter">the blockchain eliminates a number of risks that come with data
      being
      held centrally.</p>
    <h4 class="display-6 text-info texcenter"><b>Dear ${data.nametitle} ${data.firstname} ${data.lastname}</b></h4>
    <!-- <span class="badge badge-pill badge-info paddingName texcenter" style="font-size:15px">Dear Mr.Surakiti Sopnnacap</span> -->
    <hr class="my-4">

    <!-- 
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a> -->
<div class="shadow-lg p-3 mb-5 bg-white rounded">
    <div class="container paddingCon">
      <h1 class="card-title text-info texcenter">Medical Record</h1>
      <h6 class=" text-muted"><b>Date :</b> ${data.date} ${data.time} </h6>
      <h6 class=" mb-2 text-muted"><b>Clinic :</b> ${data.clinic}</h6>
      <hr>
      <div class="row">
        <div class="col">
          <p class="card-text"><b>Height</b></p>
        </div>
        <div class="col">
          <p class="card-text"><b>bodyWeight</b></p>
        </div>
        <div class="col">
          <p class="card-text"><b>bmi</b></p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p class="card-text">${data.height} cm.</p>
        </div>
        <div class="col">
          <p class="card-text">${data.bodyWeight} Kg.</p>
        </div>
        <div class="col">
          <p class="card-text">${data.bmi} </p>
        </div>
      </div>



      <div class="row">
        <div class="col">
          <p class="card-text"><b>temperature</b></p>
        </div>
        <div class="col">
          <p class="card-text"><b>pulseRate</b></p>
        </div>
        <div class="col">
          <p class="card-text"><b>respiratoryRate</b></p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p class="card-text">${data.temperature} C.</p>
        </div>
        <div class="col">
          <p class="card-text">${data.pulseRate} PR.</p>
        </div>
        <div class="col">
          <p class="card-text">${data.respiratoryRate} PR.</p>
        </div>
      </div>



      <div class="row">
        <div class="col">
          <p class="card-text"><b>BP1</b></p>
        </div>
        <div class="col">
          <p class="card-text"><b>BP2</b></p>
        </div>
        <div class="col">
          <p class="card-text"><b>BP3</b></p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p class="card-text">${data.BP1} mmHg.</p>
        </div>
        <div class="col">
          <p class="card-text">${data.BP2} mmHg.</p>
        </div>
        <div class="col">
          <p class="card-text">${data.BP3} mmHg.</p>
        </div>
      </div>

      <hr />


      <div class="row">
        <div class="col">
          <p class="card-text mb-2"><b>Chief Plaint</b></p>
        </div>
      </div>
      <div class="row">
        <div class="col ">
          <div class="card ">
            <div class="card-body ">
              <p class="card-text">${data.chiefComplaint}</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
       <div class="row justify-content-between">
          <div class="col-4">
           
          </div>
          <div class="col-4">
            <p><b>Nurse Name</b></p>
            <p>${data.nurseName}</p>
          </div>
      </div>
     
      <br>

      <div class="row">
        <div class="col">
          <p class="card-text mb-2"><b>Present Illness</b></p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body mb-2">
              <p class="card-text">${data.presentIllness}</p>
            </div>
          </div>
        </div>
      </div>
      <br>

      <div class="row">
        <div class="col">
          <p class="card-text mb-2"><b>Physical Exam</b></p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <p class="card-text">${data.physicalExem}</p>
            </div>
          </div>
        </div>
      </div>
      <br>

      <div class="row">
        <div class="col">
          <p class="card-text mb-2"><b>Dianosis / impression</b></p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <p class="card-text">${data.diagnosis}</p>
            </div>
          </div>
        </div>
      </div>
      <br>

      <div class="row">
        <div class="col">
          <p class="card-text mb-2"><b>Treatment</b></p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <p class="card-text ">${data.treatment}</p>
            </div>
          </div>
        </div>
      </div>
      <br>

      <div class="row">
        <div class="col">
          <p class="card-text mb-2"><b>Recommendation and Plan</b></p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <p class="card-text">${data.recommendation}</p>
            </div>
          </div>
        </div>
      </div>
    
    <br/>
       <div class="row justify-content-between">
          <div class="col-4">
            <p><b>Appointment</b></p>
             <p>${data.appointment}</p>
          </div>
          <div class="col-4">
            <p><b>Doctor Name</b></p>
             <p>${data.doctorName}</p>
          </div>
      </div>

      </div>
    </div>
  </div>
  </div>


</body>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
  crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
  crossorigin="anonymous"></script>

</html>
`)

module.exports = html