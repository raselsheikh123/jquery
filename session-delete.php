<?php
session_start();

session_unset();

if (session_destroy()){
    echo "Session Has deleted";
}
