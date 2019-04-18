make:
	make clean
	zip -r upload.zip * -x makefile screenshots\*
	mv upload.zip ../Packed\ Extensions

clean:
	rm -f upload.zip