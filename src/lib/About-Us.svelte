<script></script>

<section>
    <div class="container">
        <h2>About Us</h2>
        <div class="text-container">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros
                erat, volutpat ut nibh ac, suscipit tempus tellus. Curabitur id
                scelerisque lacus, quis sollicitudin turpis. Donec faucibus facilisis
                leo vel mattis. Duis volutpat dolor tempus, pulvinar ex ac, blandit
                nibh. Morbi tempus quam a purus eleifend rhoncus. Morbi quis lacus nisl.
                In id eleifend elit, in pharetra nunc.
            </p>
            <p>
                Sed sed odio felis. Donec tempus efficitur feugiat. Nulla facilisi. Sed
                ut tortor eu quam faucibus egestas. Mauris mollis sapien eu odio
                faucibus cursus. Nunc luctus tincidunt metus, id dignissim urna. Etiam
                sapien lorem, rutrum vel condimentum vel, accumsan id sapien.
            </p>
            
        </div>
    </div>
</section>

<style>
    h2 {
        text-transform: uppercase;
        text-align: center;
    }
    section {
        display: flex;
        justify-content: center;
    }
    .container {
        width: 800px;
    }

    @media only screen and (max-width: 768px) {
     h2 {
         font-size: 28px;
     }   
     .text-container {
         
         display: flex;
         flex-direction: column;
        align-items: center;
     }
     p {
         text-align: center;
         width: 80%
     }
    }
</style>
