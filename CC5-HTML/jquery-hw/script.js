$(document).ready(function() {
    $("#btn").click(function() {
        $("ol").prepend("<li>
        <div class="content-grid">
            <div class="content-item">
                <img src="./Images/20280280161579615955-128.png">
            </div>

            <div class="content-item">
                <h5>Kalyssa</h5>
                <p>hi...</p>
                <div class="post-time">20:33:10</div>
                <div class="count"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 20</div>
                <div class="btn"><button><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Like</button>
                </div>
            </div>

            <div class="content-item">
                <div class="delete">Delete</div>
            </div>
        </div>
    </li>")
    });
}